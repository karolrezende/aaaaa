function Restricted(isLoggedIn, user, Login, Logout) {
  if (isLoggedIn === true) {
    <div>
      <div>Bem vinde{user}</div>
      <button onClick={Logout}>Logout</button>;
    </div>;
  } else if (isLoggedIn === false) {
    <div>
      <div>Voce nao pode acessar essa pagina</div>
      <button onClick={Login}>Login</button>
    </div>;
  }
}
export default Restricted;
