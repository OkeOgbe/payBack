import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import SideBar from '../components/Auth/sideBar';
import InputGroup from '../components/Reusables/InputGroup';
import fire, {db} from '../fbConfig';
import {swalAlert} from '../components/Reusables/alert'
import styles from '../styles/Auth.module.css';
import Link from 'next/link';
import Swal from 'sweetalert2';

const Register = () => {

    const [formData,
        setFormData] = useState({name: '', username: '', email: '', password: ''});

    const {name, username, email, password} = formData;

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                db
                    .collection('users')
                    .add({uid: user.user.uid, name, username, email, password})
            })
            .then(() => {
                swalAlert("Signup Successful", "Redirecting", "success");
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

    return (
        <div>
            <div className="row no-gutters">
                <div className="col-md-3">
                    <SideBar
                        Header='Get Started With Payback'
                        SubHeader="Let's get started, Shall we?"/>
                </div>
                <div className="col-md-9">
                    <div className="h-100 center">
                        <div className={styles.signupFormHolder}>
                            <h2 className="sectionHead-mid text_is_purple">Sign Up</h2>
                            <form onSubmit={handleSubmit} className='pt-1'>
                                <div className="mt-3">
                                    <InputGroup
                                        label='Name'
                                        formType='text'
                                        formName='name'
                                        formValue={name}
                                        placeholder='John Doe'
                                        onChange={handleChange}/>
                                </div>

                                <div className="mt-3">
                                    <InputGroup
                                        label='Username'
                                        formType='text'
                                        formName='username'
                                        formValue={username}
                                        placeholder='HotRocket'
                                        onChange={handleChange}/>
                                </div>

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
                                    <button type="submit" className='btn--purpleBg'>Register</button>
                                </div>
                            </form>
                            <p className="sectionText--small v_align mt-3">Already have an account?
                                <Link href='/login'>
                                    <a className='text_is_purple pl-1'>Login Here</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;