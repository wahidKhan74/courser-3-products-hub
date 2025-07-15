// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <a href="/">Products Hub</a>
//       </div>
//       <ul className="navbar-menu">
//         <li><a href="/products">Products</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// }

const Navbar = ({items}) => {

    const handleClick = (id, name) => {
        console.log(`Clicked on item with id: ${id} and name: ${name}`);
    };

    return (
        <ul>
            {items.map(item => (
                <li key={item.id} onClick={() => handleClick(item.id, item.name)}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default Navbar;