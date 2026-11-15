#ifndef WASI_COMPAT_PWD_H
#define WASI_COMPAT_PWD_H
#include <sys/types.h>
struct passwd { char *pw_name; char *pw_passwd; uid_t pw_uid; gid_t pw_gid; char *pw_gecos; char *pw_dir; char *pw_shell; };
#ifdef __cplusplus
extern "C" {
#endif
struct passwd *getpwnam(const char *);
struct passwd *getpwuid(uid_t);
void endpwent(void);
#ifdef __cplusplus
}
#endif
#endif
