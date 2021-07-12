// import { GoogleLogin } from 'react-google-login';

// // refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

// const clientId =
//   '411486917422-6lj9ns2o80p3cqh2ejf0atr6phirg4bk.apps.googleusercontent.com';

// function Login() {
//   const onSuccess = (res) => {
//     console.log('Login Success: currentUser:', res.profileObj);
//     alert(
//       `Logged in successfull ${res.profileObj.name} 😍.`
//     );
//     refreshTokenSetup(res);
//   };

//   const onFailure = (res) => {
//     console.log('Login failed: res:', res);
//     alert(
//       `Failed to login. 😢 Please message this to the owner @ github.com/lumberzach`
//     );
//   };

//   return (
//     <div>
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Login"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={'single_host_origin'}
//         style={{ marginTop: '100px' }}
//         isSignedIn={true}
//       />
//     </div>
//   );
// }

// export default Login;