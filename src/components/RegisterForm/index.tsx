import { FiGithub, FiUser } from "react-icons/fi";
import CustomInput from "../CustomInput";
import { CiMail } from "react-icons/ci";
import { FaChrome, FaGoogle, FaLock } from "react-icons/fa";
import CustomButton from "../CustomButton";
import Link from "next/link";

export default function RegisterForm() {
    return (
        <div className="w-full max-w-md mx-auto bg-gradient-to-br
        from-[]#181b20cc] to-[#1d2025e6] border
        -[#2c313a]/50 backdrop-blur-xl shadow-[#181blf]
        rounded-lg text-gray-400">
            <div className="p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r
                from-[#5593f7] to-[#1d4fdf7] text-transparent bg-clip-text">
                        Criar Conta
                    </h2>
                    <p>Prencha os dados da sua conta</p>
                </div>
                <form onSubmit={() => { }}
                    className="space-y-6"
                >
                    <CustomInput
                        label="Nome Completo"
                        type="text"
                        placeholder="nome completo"
                        icon={<FiUser />}
                        required={true}
                    />
                    <CustomInput
                        label="Email"
                        type="text"
                        placeholder="Seu@email.com"
                        icon={<CiMail />}
                        required={true}
                    />
                    <CustomInput
                        label="Senha"
                        type="password"
                        placeholder="********"
                        icon={<FaLock />}
                        required={true}
                    />
                    <CustomInput
                        label="Confirmar  Senha"
                        type="password"
                        placeholder="********"
                        icon={<FaLock />}
                        required={true}
                    />
                    <CustomButton
                        type="submit"
                        className="h-[45px]"
                    >
                        Criar conta
                    </CustomButton>

                    <div className="w-full flex items-center justify-center  gap-4">
                        <div className="w-[100%] h-[1px] bg-[#2c313a]"></div>
                        <p className="text-[12px] text-gray-400">OU</p>
                        <div className="w-[100%] h-[1px] bg-[#2c313a] "></div>
                    </div>
                    <div className="space-y-3">
                        <CustomButton
                            variant="outline"
                            className="text-sm hover:bg-[#F9AF32]"
                        >
                            <FiGithub />
                            Continuar com GitHub
                        </CustomButton>
                        <CustomButton
                            variant="outline"
                            className="text-sm hover:bg-[#4487F4]"
                        >
                            <FaGoogle />
                            Continuar com Google

                        </CustomButton>
                    </div>
                    <div className="text-center mt-6 flex items-center justify-center gap-2">
                    <p className="text-sm text-gray-400">Já tem uma conta?</p>
                       <Link 
                       href="/"
                       className="text-sm text-[#5593f7] hover:text-[#5594f3]/80 transition-colors"
                       >
                       Fazer Login
                       </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}