#ifndef WASI_COMPAT_SYS_WAIT_H
#define WASI_COMPAT_SYS_WAIT_H
#include <sys/types.h>
#define WNOHANG 1
#define WUNTRACED 2
#define WEXITSTATUS(s) (((s) & 0xff00) >> 8)
#define WTERMSIG(s) ((s) & 0x7f)
#define WSTOPSIG(s) WEXITSTATUS(s)
#define WIFEXITED(s) (WTERMSIG(s) == 0)
#define WIFSTOPPED(s) (((s) & 0xff) == 0x7f)
#define WIFSIGNALED(s) (((s) & 0xffff) - 1U < 0xffu)
pid_t waitpid(pid_t, int *, int);
#endif
