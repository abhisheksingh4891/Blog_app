import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
    
        <span className="headerTitleLg">Blogging App</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1489088266267-724cc2f59e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="header"
      />
    </div>
  );
}
