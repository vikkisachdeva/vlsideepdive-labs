#ifndef WASI_COMPAT_NETDB_H
#define WASI_COMPAT_NETDB_H
#include <sys/socket.h>
#include <netinet/in.h>
struct hostent { char *h_name; char **h_aliases; int h_addrtype; int h_length; char **h_addr_list; };
#define h_addr h_addr_list[0]
struct servent { char *s_name; char **s_aliases; int s_port; char *s_proto; };
#ifndef AI_PASSIVE
struct addrinfo { int ai_flags; int ai_family; int ai_socktype; int ai_protocol; socklen_t ai_addrlen; struct sockaddr *ai_addr; char *ai_canonname; struct addrinfo *ai_next; };
#define AI_PASSIVE 0x01
#define AI_CANONNAME 0x02
#define AI_NUMERICHOST 0x04
#define AI_ADDRCONFIG 0x20
#define NI_NUMERICHOST 0x01
#define NI_NUMERICSERV 0x02
#define NI_NAMEREQD 0x08
#define NI_MAXHOST 1025
#define NI_MAXSERV 32
#define EAI_FAIL -4
#define EAI_SYSTEM -11
#endif
#ifndef SO_ERROR
#define SO_ERROR 4
#endif
#ifndef SO_REUSEADDR
#define SO_REUSEADDR 2
#endif
#ifndef SO_SNDBUF
#define SO_SNDBUF 7
#endif
#ifndef SO_RCVBUF
#define SO_RCVBUF 8
#endif
#ifdef __cplusplus
extern "C" {
#endif
int getaddrinfo(const char *, const char *, const struct addrinfo *, struct addrinfo **);
void freeaddrinfo(struct addrinfo *);
const char *gai_strerror(int);
int getnameinfo(const struct sockaddr *, socklen_t, char *, socklen_t, char *, socklen_t, int);
struct hostent *gethostbyname(const char *);
struct hostent *gethostbyaddr(const void *, socklen_t, int);
struct servent *getservbyname(const char *, const char *);
#ifdef __cplusplus
}
#endif
#endif
