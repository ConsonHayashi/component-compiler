#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int addressAddtion(int CS, int IP);

int addressAddtion(int CS, int IP) {
  return (CS << 4) + IP;
}

int main(int argc, char** argv) {
  printf("hello addressAddition!!\n");
  int i;
  for(i = 1; i < argc; i++) {
    int CS = 0;
    int IP = 0;
    char *p;
    p = strsep(&argv[i], ":");
    CS = atoi(p);
    printf("Argument %d is %d.\n", i, atoi(p) + 1);
    p = strsep(&argv[i], ":");
    IP = atoi(p);
    printf("Argument %d is %d.\n", i, atoi(p) + 1);
    printf("CS is %d and IP is %d\n", CS, IP);
    printf("address is %d\n", addressAddtion(CS, IP));
  }  
  return 0;
}