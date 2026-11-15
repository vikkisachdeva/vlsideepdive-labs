/* Stubs for POSIX functions that WASI does not provide. Each one fails
 * cleanly so Tcl reports an error instead of crashing. */
#include <errno.h>
#include <stddef.h>
#include <sys/types.h>
#include <sys/socket.h>
#include "pwd.h"
#include "grp.h"
#include "netdb.h"
#define FAIL(ret) do { errno = ENOSYS; return ret; } while (0)
int bind(int a, const struct sockaddr *b, socklen_t c) { (void)a;(void)b;(void)c; FAIL(-1); }
int connect(int a, const struct sockaddr *b, socklen_t c) { (void)a;(void)b;(void)c; FAIL(-1); }
int listen(int a, int b) { (void)a;(void)b; FAIL(-1); }
int socket(int a, int b, int c) { (void)a;(void)b;(void)c; FAIL(-1); }
int setsockopt(int a, int b, int c, const void *d, socklen_t e) { (void)a;(void)b;(void)c;(void)d;(void)e; FAIL(-1); }
int getpeername(int a, struct sockaddr *b, socklen_t *c) { (void)a;(void)b;(void)c; FAIL(-1); }
int getsockname(int a, struct sockaddr *b, socklen_t *c) { (void)a;(void)b;(void)c; FAIL(-1); }
int getaddrinfo(const char *a, const char *b, const struct addrinfo *c, struct addrinfo **d) { (void)a;(void)b;(void)c; if (d) *d = NULL; return EAI_FAIL; }
void freeaddrinfo(struct addrinfo *a) { (void)a; }
const char *gai_strerror(int e) { (void)e; return "networking is not available in the browser"; }
int getnameinfo(const struct sockaddr *a, socklen_t b, char *c, socklen_t d, char *e, socklen_t f, int g) { (void)a;(void)b;(void)c;(void)d;(void)e;(void)f;(void)g; return EAI_FAIL; }
struct hostent *gethostbyname(const char *a) { (void)a; return NULL; }
struct servent *getservbyname(const char *a, const char *b) { (void)a;(void)b; return NULL; }
int chown(const char *a, uid_t b, gid_t c) { (void)a;(void)b;(void)c; return 0; }
int dup2(int a, int b) { (void)a;(void)b; FAIL(-1); }
int execvp(const char *a, char *const b[]) { (void)a;(void)b; FAIL(-1); }
pid_t fork(void) { FAIL(-1); }
int pipe(int f[2]) { (void)f; FAIL(-1); }
pid_t wait(int *s) { (void)s; errno = ECHILD; return -1; }
uid_t getuid(void) { return 0; }
uid_t geteuid(void) { return 0; }
struct passwd *getpwnam(const char *a) { (void)a; return NULL; }
struct passwd *getpwuid(uid_t a) { (void)a; return NULL; }
void endpwent(void) {}
struct group *getgrnam(const char *a) { (void)a; return NULL; }
struct group *getgrgid(gid_t a) { (void)a; return NULL; }
void endgrent(void) {}
int mkfifo(const char *a, mode_t b) { (void)a;(void)b; FAIL(-1); }
int mknod(const char *a, mode_t b, dev_t c) { (void)a;(void)b;(void)c; FAIL(-1); }
mode_t umask(mode_t m) { (void)m; return 022; }
int tzset(void) { return 0; }
