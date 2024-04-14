import { useForm } from "react-hook-form";

const Register = () => {

    const { register, handleSubmit, formState: { errors },} = useForm();

    const onSubmit = data =>{
        const {name, photo, email, password} = data;
       
    }

    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="name" {...register('name',{required:true})} className="mb-4 w-full py-2 px-4 border"/>
                    <br />
                    <input type="text" placeholder="photo URL" {...register('photo',{required:true})} className="mb-4 w-full py-2 px-4 border" />
                    <br />
                    <input type="email" placeholder="email" {...register('email',{required:true})} className="mb-4 w-full py-2 px-4 border" />
                    <br />
                    <input type="password" placeholder="password" {...register('password',{required:true})} className="mb-4 w-full py-2 px-4 border" />
                    <br />
                    <input className="btn btn-secondary mb-4 w-full" type="submit" value="Register" />
                </form>

            </div>
        </div>
    );
};

export default Register;