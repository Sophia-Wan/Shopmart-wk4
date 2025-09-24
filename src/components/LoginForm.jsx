function LoginForm() {
    return (
        <div className='form-container'>
            <h2>Login Form</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor='pr-name'>Username:</label>
                    <input
                        type='text'
                        name='Username'
                        placeholder='gei'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='pr-desc'>Password:</label>
                    <input
                        type='password'
                        name='pr-desc'
                        placeholder='Password...'
                    />
                </div>

                <button className='btn primary'>Login</button>
            </form>
        </div>
    );
}
export default LoginForm;
