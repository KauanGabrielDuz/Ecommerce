import Button from 'react-bootstrap/Button';
 
function Navigation() {
  return (
    <nav className="submenu">
      <Button variant="success">Menu</Button>
      <Button variant="success">Camisa</Button>
      <Button variant="success">Jogos</Button>
      <Button variant="success">Action Figures</Button>
      <Button variant="success">Mangas</Button>
    </nav>
  );
}
export default Navigation;