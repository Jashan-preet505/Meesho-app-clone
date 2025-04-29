// src/auth.js

export const fakeAuth = {
    isAuthenticated: false,
    login(username, password, cb, errorCb) {
      // Simulate authentication logic
      if (username === "admin" && password === "password") {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // simulate async
      } else {
        setTimeout(() => errorCb("Invalid credentials"), 100);
      }
    },
    logout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  