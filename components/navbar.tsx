import Image from "next/image";
import avatarFace from '../assets/images/face.jpg'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">MuxPlayer</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <input type="text" name="" id="" className="input input-bordered" placeholder="Search music here" />
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image src={avatarFace} alt="Avatar" width={500} height={500}></Image>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
