package dix.view;

/**
 *
 * @author Joanna Ruth
 */
public enum CmdOption {

    VIEW_PARDEF     ("vpar",    "view a specified paradigm"),
    VIEW_ALL_PARDEFS("vparall", "view all paradigms"),
    VIEW_HELP       ("help",    "view program information");
    
    private final String option;
    private final String description;

    public String getOption() {
        return option;
    }

    public String getDescription() {
        return description;
    }

    CmdOption(String opt, String description) {
        this.option = opt;
        this.description = description;
    }

    public static CmdOption getOption(String opt) {
        for (CmdOption option : CmdOption.values()) {
            if (option.getOption().equals(opt)) {
                return option;
            }
        }
        return VIEW_HELP;
    }
}
