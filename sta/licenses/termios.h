#ifndef WASI_COMPAT_TERMIOS_H
#define WASI_COMPAT_TERMIOS_H
typedef unsigned int tcflag_t; typedef unsigned char cc_t; typedef unsigned int speed_t;
#define NCCS 32
struct termios { tcflag_t c_iflag, c_oflag, c_cflag, c_lflag; cc_t c_cc[NCCS]; speed_t c_ispeed, c_ospeed; };
#endif
