import './login.css';
import {useState} from "react";
import {loginUser} from "./actions";
import {connect} from "react-redux";


const Login = (props) => {
    const {
        login,
        loading,
    } = props;


    const [form, setForm] = useState({
        login: '',
        password: ''
    })

    // useEffect(() => {
    //     loginUser('user', '1234')
    //         .then(response => {
    //             setUser(response);
    //             setLoading(false);
    //         })
    // }, []);

    //partial
    const updateValue = key => e => setForm({
            ...form,
            [key]: e.target.value
        })


    const onSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        login(form.login, form.password);

    }
    return (
        <div className="login">
            Pantalla de login
            {loading &&
            <div className="loading">loading</div>
            }
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Login" value={form.login}
                       onChange={updateValue('login')}
                />
                <input type="password" placeholder="Password" value={form.password}
                       onChange={updateValue('password')}
                />
                <button>Login</button>
            </form>
        </div>

    )
}

export default connect(
    store => ({
        loading: store.login.loading
        }),
    dispatch => ({
        login: (login, password) => dispatch(loginUser(login, password))
    })
)(Login)
