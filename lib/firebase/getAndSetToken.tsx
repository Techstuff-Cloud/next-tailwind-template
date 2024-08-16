import { auth } from './firebase';

export const getAndSetToken = async () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        user
          .getIdToken()
          .then(function (idToken) {
            resolve(idToken);
          })
          .catch(function (error) {
            reject(error);
          });
      } else {
        resolve(null);
      }
    });
  });
};
