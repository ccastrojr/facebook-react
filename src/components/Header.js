import React from 'react';

function Header() {
   return (
      <header>
         <div className="content">
            <div className="wrapper">
               <div className="brand-logo"></div>
               <form>
                  <input type="text" placeholder="Pesquisar"/>
                  <button className="search-button"></button>
               </form>
            </div>

            <nav>
               <ul>
                  <li>
                     <a href="#">
                        <div className="user-profile"></div>
                        Cláudio Jr
                     </a>
                  </li>
                  <li><a href="#">Página Inical</a></li>
                  <li><a href="#">Criar</a></li>
                  <li className="actions">
                     <a href="#"><div className="icon users"></div></a>
                     <a href="#"><div className="icon messenger"></div></a>
                     <a href="#"><div className="icon notifications"></div></a>
                  </li>
                  <li>
                     <a href="#"><div className="icon questions"></div></a>
                     <a href="#"><div className="icon more-actions"></div></a>
                  </li>
               </ul>
            </nav>
            <div></div>
         </div>
      </header>
   )
}

export default Header;