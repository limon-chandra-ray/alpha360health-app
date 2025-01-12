import { UserIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";


const Header=()=>{
    return <nav className="bg-blue-300 absolute top-0 left-0 right-0 h-[70px] shadow-md">
        <div className="flex justify-end py-6 px-4">
            <div className="flex gap-x-2">
                <button className="p-1 rounded-full border border-blue-700">
                    <BellIcon className="size-5 text-blue-500" />
                </button>
                <button className="p-1 rounded-full border border-blue-700">
                    <EnvelopeIcon className="size-5 text-blue-500"/>
                </button>
                <button className="p-1 rounded-full border border-blue-700">
                    <UserIcon className="size-5 text-blue-500"/>
                </button>
            </div>
        </div>
    </nav>
}
export default Header;