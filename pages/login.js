import React, {useState} from 'react';
import SideBar from '../components/Auth/sideBar';
import InputGroup from '../components/Reusables/InputGroup';
import fire, {db} from '../fbConfig';
import {swalAlert} from '../components/Reusables/alert';
import styles from '../styles/Auth.module.css';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Login = () => {

    const [formData,
        setFormData] = useState({email: '', password: ''});

    const {email, password} = formData;

     const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                swalAlert('Welcome Back', 'Redirecting', 'success');
                router.push('/home');
            })
            .catch(error => {
                swalAlert('Error', error.message, 'error');
            })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    // fire
    //     .auth()
    //     .currentUser && router.push('/home');

    return (
        <div>
            <div className="row no-gutters">
                <div className="col-md-3">
                    <SideBar
                        Header='Welcome Old Timer'
                        SubHeader="How about we bill your debtors?"/>
                </div>
                <div className="col-md-9">
                    <div className="h-100 center">
                        <div className={styles.signupFormHolder}>
                            <h2 className="sectionHead-mid text_is_purple">Login</h2>
                            <form onSubmit={handleSubmit} className='pt-1'>
                                <div className="mt-3">
                                    <InputGroup
                                        label='Email'
                                        formType='email'
                                        formName='email'
                                        formValue={email}
                                        placeholder='jdoe@email.com'
                                        onChange={handleChange}/>
                                </div>

                                <div className="mt-3">
                                    <InputGroup
                                        label='Password'
                                        formType='password'
                                        formName='password'
                                        formValue={password}
                                        placeholder='123456'
                                        onChange={handleChange}/>
                                </div>

                                <div className={`mt-4 + ${styles.btnHolder}`}>
                                    <button type="submit" className='btn--purpleBg'>Login</button>
                                </div>
                            </form>
                            <p className="sectionText--small v_align mt-3">Don't have an account?
                                <Link href='/register'>
                                    <a className='text_is_purple pl-1'>Register Here</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;