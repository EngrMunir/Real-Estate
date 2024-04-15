import { useForm } from "react-hook-form";
const Login = () => {
    const { register, handleSubmit, formState: { errors },} = useForm();
    const onSubmit = data =>{
        const {email, password} = data;
       
    }
    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">Please Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="email" {...register('email',{required:true})} className="mb-4 w-full py-2 px-4 border" />
                    <br />
                    <input type="password" placeholder="password" {...register('password',{required:true})} className="mb-4 w-full py-2 px-4 border" />
                    <br />
                    <input className="btn btn-secondary mb-4 w-full" type="submit" value="Login" />
                </form>

            </div>
        </div>
    );
};

export default Login;