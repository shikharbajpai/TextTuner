export default function NavBar(props) {
    const mode = props.isChecked ? 'light' : 'dark';
    const textColor = props.isChecked ? '#212529' : '#f8f9fa';

    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <h3 className="navbar-brand">{props.title}</h3>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch"
                        id="flexSwitchCheckChecked" checked={props.isChecked}
                        onChange={props.toggleSwitch} />
                    <label className="form-check-label"
                        htmlFor="flexSwitchCheckChecked" style={{ color: textColor }}>
                        {props.isChecked ? 'Light Mode' : 'Dark Mode'}
                    </label>
                </div>
            </div>
        </nav>
    );
}
