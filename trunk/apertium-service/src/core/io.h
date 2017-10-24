/**
 * @file
 * @author  Pasquale Minervini <p.minervini@gmail.com>
 * @version 1.0
 *
 * @section LICENSE
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

#ifndef IO_H_
#define IO_H_

#include <cstdio>
#include "config.h"

#if !HAVE_DECL_FPUTS_UNLOCKED
#define fputs_unlocked fputs
#endif

#if !HAVE_DECL_FGETC_UNLOCKED 
#define fgetc_unlocked fgetc
#endif

#if !HAVE_DECL_FPUTC_UNLOCKED
#define fputc_unlocked fputc
#endif

#if !HAVE_DECL_FWRITE_UNLOCKED
#define fwrite_unlocked fwrite
#endif

#if !HAVE_DECL_FREAD_UNLOCKED
#define fread_unlocked fread
#endif

#if !HAVE_DECL_FGETWC_UNLOCKED
#define fgetwc_unlocked fgetwc
#endif

#if !HAVE_DECL_FPUTWC_UNLOCKED
#define fputwc_unlocked fputwc
#endif

#if !HAVE_DECL_FPUTWS_UNLOCKED
#define fputws_unlocked fputws
#endif

#endif /* IO_H_ */
