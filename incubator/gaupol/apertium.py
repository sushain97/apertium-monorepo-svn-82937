"""Machine Translation suggestions from local Apertium installation."""

# This program is free software: you can redistribute it and/or modify it under the
# terms of the GNU General Public License as published by the Free Software
# Foundation, either version 3 of the License, or (at your option) any later
# version.
#
# This program is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
# General Public License for more details.
#
# You should have received a copy of the GNU General Public License along with
# Gaupol. If not, see <http://www.gnu.org/licenses/>.

import aeidon
import gaupol
import gtk
import os
import pango
import subprocess
import HTMLParser
_ = aeidon.i18n._


class ApertiumExtension(gaupol.Extension):
    def __init__(self):
        """Initialize a :class:`ApertiumExtension` object."""
        self._action_group = None
        self._conf = None
        self._uim_id = None
        self.application = None

    def setup(self, application):
        gaupol.conf.register_extension("apertium",
                                       {"markunknown": False,
                                        "path": '/usr/local/bin/apertium',
                                        "modes": [],
                                        # TODO preference for usermodes:
                                        "usermodes": []}) 
        gaupol.conf.extensions.apertium.modes = ApertiumExtension.find_modes()
        self._action_group = gtk.ActionGroup("apertium")
        self._conf = gaupol.conf.extensions.apertium
        self._uim_id = None
        self.application = application
        self._init_actions()
        print self._conf.modes

    def teardown(self, application):
        pass

    def update(self, application, page):
        pass

    def _init_actions(self):
        """Initialize UI manager actions."""
        self._action_group.add_actions((
            ("show_apertium_menu", None, _("_Apertium")),
            ("translate", None, _("_Translate"),
             None, _("Translate with Apertium"),
             self._on_translate_activate),))
        self.application.uim.insert_action_group(self._action_group, -1)
        directory = os.path.abspath(os.path.dirname(__file__))
        ui_file_path = os.path.join(directory, "apertium.ui.xml")
        self._uim_id = self.application.uim.add_ui_from_file(ui_file_path)
        self.application.uim.ensure_update()
        self.application.set_menu_notify_events("apertium")

    @classmethod
    def described_modes(cls):
        """Return a list of pairs of possible translation modes, along
        with descriptions if they have them."""
        modedesc = {
            'es-ca' : 'Spanish -> Catalan',
            'ca-es' : 'Catalan -> Spanish',
            'ro-es' : 'Romanian <- Spanish',
            'fr-ca' : 'French -> Catalan',
            'ca-fr' : 'Catalan -> French',
            'oc-ca' : 'Occitan -> Catalan',
            'ca-oc' : 'Catalan -> Occitan',
            'en-gl' : 'English -> Galician',
            'gl-en' : 'Galician -> English',
            'sv-da' : 'Swedish -> Danish',
            'mk-en' : 'Macedonian -> English',
            'oc-es' : 'Occitan -> Spanish',
            'es-oc' : 'Spanish -> Occitan',
            'es-pt' : 'Spanish -> Portuguese',
            'pt-es' : 'Portuguese -> Spanish',
            'en-ca' : 'English -> Catalan',
            'val-en-ca' : 'English -> Catalan (Valencian)',
            'ca-en' : 'Catalan -> English',
            'en-es' : 'English -> Spanish',
            'es-en' : 'Spanish -> English',
            'en-eo' : 'English -> Esperanto',
            'eo-en' : 'Esperanto -> English',
            'es-ast' : 'Spanish -> Asturian',
            'ast-es' : 'Asturian -> Spanish',
            'it-ca' : 'Italian <- Catalan ',
            'es-gl' : 'Spanish -> Galician',
            'gl-es' : 'Galician -> Spanish',
            'fr-es' : 'French -> Spanish',
            'es-fr' : 'Spanish -> French',
            'es-eo' : 'Spanish <- Esperanto',
            'cy-en' : 'Welsh -> English',
            'br-fr' : 'Breton -> French',
            'is-en' : 'Icelandic -> English',
            'ca-eo' : 'Catalan <- Esperanto',
            'pt-ca' : 'Portuguese -> Catalan',
            'ca-pt' : 'Catalan -> Portuguese',
            'pt-gl' : 'Portuguese -> Galician',
            'gl-pt' : 'Galician -> Portuguese',
            'eu-es' : 'Basque -> Spanish',
            'nn-nb' : 'Nynorsk -> Bokm\xc3\xa5l',
            'nb-nn' : 'Bokm\xc3\xa5l -> Nynorsk (e-verb)',
            'nb-nn_a' : 'Bokm\xc3\xa5l -> Nynorsk (a-verb)',
            'nb-nn-cp' : 'Bokm\xc3\xa5l -> Nynorsk (e-verb, compounding)',
            'nb-nn_a-cp' : 'Bokm\xc3\xa5l -> Nynorsk (a-verb, compounding)',
            'mk-bg' : 'Macedonian -> Bulgarian',
            'bg-mk' : 'Bulgarian -> Macedonian',
            }
        modes = gaupol.conf.extensions.apertium.modes \
            + gaupol.conf.extensions.apertium.usermodes
        return [(m,d) for m,d in modedesc.iteritems() if m in modes] \
            + [(m,'') for m in modes if m not in modedesc.keys()]

    @classmethod
    def find_modes(cls):
        """Find the supported modes (possible translation directions).
        Assumes gaupol.conf.extensions.apertium.path is set"""
        path = gaupol.conf.extensions.apertium.path
        if not os.path.isfile(path):
            print "WARNING: apertium executable not found at %s" % path
            return []
        cmd = "%s -l" % (path)
        process = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE)
        process.wait()
        if process.returncode != 0:
            print "WARNING: %s returned %s" % (cmd, process.returncode)
        return process.stdout.read().split()
    
    def _on_translate_activate(self, *args):
        """Do translation with Apertium"""
        if self.application.get_current_page():
            page = self.application.get_current_page()
            
            dialog = ApertiumModeDialog(self.application.window)
            response = gaupol.util.run_dialog(dialog)
            mode = dialog.get_mode()
            dialog.destroy()
            if response != gtk.RESPONSE_OK: return
            if mode is None: return
            
            trans = self.deformat(self.translate(mode,
                                                 self.format(page.project.subtitles)))
            
            page.project.replace_texts(page.project.get_all_indices(),
                                       aeidon.documents.TRAN,
                                       trans)
            page.project.set_action_description(aeidon.registers.DO,
                                                "Translating texts")
        else:
            # TODO grey out menu item
            print "WARNING: cannot translate without a project!"

    def format(self, subs):
        """Add a fake html tag that will be ignored by apertium so
        that we can split it up after translation. Also, add a period
        so that if there is no punctuation in the original text, the
        translator will still interpret it as if it were a complete
        sentence (although this might not always be true)."""
        doc = u""
        for sub in subs:
            doc += "<sub/>%s\n.\n" % (sub.main_text)
        return doc

    def deformat(self, doc):
        """The html deformatter turns unicode into entities, remove
        them, and the stuff added by `format`."""
        h = HTMLParser.HTMLParser()
        return [ unicode(h.unescape( line.rstrip('.\n') ))
                 for line in doc.split('<sub/>')
                 if line != '' ]
    
    def translate(self, mode, doc):
        infile = "/tmp/infile.tmp"
        outfile = "/tmp/outfile.tmp"
        fin = open(infile, "w")
        fin.write(doc)
        fin.close()
        markunknown = '-u'
        if self._conf.markunknown:
            markunknown = ''
        cmd = "%s -f html %s %s %s %s" % (self._conf.path, markunknown,
                                          mode, infile, outfile)
        process = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE)
        # wait for Apertium to finish
        process.wait()
        if process.returncode != 0: # 0 = success, optional check
             # TODO ui warning
            print "WARNING: %s returned %s" % (cmd, process.returncode)
        # read the result to a string
        output = process.stdout.read()
        fout = open(outfile, "r")
        translation = fout.read()
        fout.close()
        return translation
    
    def show_preferences_dialog(self, parent):
        dialog = ApertiumPreferencesDialog(parent)
        response = dialog.run()
        # dialog changes the conf values procedurally
        dialog.destroy()



class ApertiumPreferencesDialog(gaupol.BuilderDialog):

    """Dialog for editing Apertium preferences."""

    _widgets = ("markunknown", "path_entry")

    def __init__(self, parent):
        """Initialize a :class:`ApertiumPreferencesDialog` object."""
        directory = os.path.abspath(os.path.dirname(__file__))
        ui_file_path = os.path.join(directory, "preferences-dialog.ui")
        gaupol.BuilderDialog.__init__(self, ui_file_path)
        self._init_values()
        self._dialog.set_transient_for(parent)
        self._dialog.set_default_response(gtk.RESPONSE_OK)

    def _init_values(self):
        """Initialize default values for widgets."""
        self._markunknown.set_active(gaupol.conf.extensions.apertium.markunknown)
        self._path_entry.set_text(gaupol.conf.extensions.apertium.path)

    def run(self):
        """Show the dialog, run it and return response."""
        return gaupol.BuilderDialog.run(self)

    def _on_markunknown_check_toggled(self, check_button):
        """Save whether to mark unknown words setting."""
        gaupol.conf.extensions.apertium.markunknown = check_button.get_active()

    def _on_path_entry_changed(self, entry):
        """Save path to Apertium executable setting."""
        gaupol.conf.extensions.apertium.path = entry.get_text()
        gaupol.conf.extensions.apertium.modes = ApertiumExtension.find_modes()



class ApertiumModeDialog(gaupol.BuilderDialog):

    """Dialog for choosing the Apertium mode (translation direction)."""

    __metaclass__ = aeidon.Contractual

    _widgets = ("tree_view",)

    def __init__(self, parent):
        """Initialize a :class:`ApertiumModeDialog` object."""
        directory = os.path.abspath(os.path.dirname(__file__))
        ui_file_path = os.path.join(directory, "mode-dialog.ui")
        gaupol.BuilderDialog.__init__(self, ui_file_path)
        self._init_tree_view()
        gaupol.util.scale_to_content(self._tree_view,
                                     min_nchar=10,
                                     min_nlines=5,
                                     max_nchar=100,
                                     max_nlines=30)

        self._dialog.set_transient_for(parent)
        self._dialog.set_default_response(gtk.RESPONSE_OK)

    def _init_tree_view(self):
        """Initialize the tree view."""
        selection = self._tree_view.get_selection()
        selection.set_mode(gtk.SELECTION_SINGLE)
        
        store = gtk.ListStore(str, str)
        for m, d in ApertiumExtension.described_modes():
            store.append((m, d))
            
        store.set_sort_column_id(1, gtk.SORT_ASCENDING)
        self._tree_view.set_model(store)
        renderer = gtk.CellRendererText()
        column = gtk.TreeViewColumn(_("Mode"), renderer, text=0)
        column.set_clickable(True)
        column.set_sort_column_id(1)
        self._tree_view.append_column(column)
        renderer = gtk.CellRendererText()
        column = gtk.TreeViewColumn(_("Description"), renderer, text=1)
        column.set_clickable(True)
        column.set_sort_column_id(2)
        self._tree_view.append_column(column)

    def _on_tree_view_row_activated(self, *args):
        """Send response to select activated mode."""
        print "ACTIVATED"
        self.response(gtk.RESPONSE_OK)

    def get_mode(self):
        """Return the selected mode or ``None``."""
        selection = self._tree_view.get_selection()
        store, itr = selection.get_selected()
        if itr is None: return
        return store.get_value(itr, 0)

