import logoImg from '../assets/logo.jpg';

export default function Header(params) {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant" />
                <h1 >ReactFood</h1>
            </div>
            <nav>
                <button>Card (0)</button>
            </nav>
        </header>
    );
};
