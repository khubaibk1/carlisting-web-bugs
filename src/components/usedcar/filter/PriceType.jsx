import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const data = [
    {
        id: 1,
        name: "Any",
    },
    {
        id: 2,
        name: "M or Less",
    },
    {
        id: 3,
        name: "Over M",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const PriceType = () => {
    const [selected, setSelected] = useState(data[0]);
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className="flex flex-col text-center justify-center items-center">
                <div className="flex items-center justify-center gap-6 md:gap-8 ">
                    <div className="flex items-center gap-3 ">
                        <Listbox open={open} value={selected} onChange={setSelected}>
                            {() => (
                                <>
                                    <div className="relative ">
                                        <Listbox.Button className="border w-[412px] h-[60px]" onClick={toggleDropdown}>
                                            <span className="flex items-center  ">
                                                <span className="ml-3 block truncate">
                                                    {selected.name}
                                                </span>
                                            </span>
                                            <span className={`pointer-events-none absolute inset-y-0 right-4 flex items-center ${open ? 'transform rotate-180' : ''} transition-transform duration-300`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 18 11" fill="none">
                            <path
                                d="M0.505599 0.880401C0.586879 0.798915 0.683436 0.734265 0.78974 0.690154C0.896044 0.646043 1.01001 0.623337 1.1251 0.623337C1.24019 0.623337 1.35415 0.646043 1.46046 0.690154C1.56676 0.734265 1.66332 0.798915 1.7446 0.880401L9.0001 8.13765L16.2556 0.880401C16.4199 0.716099 16.6427 0.623796 16.8751 0.623796C17.1075 0.623796 17.3303 0.716099 17.4946 0.880401C17.6589 1.0447 17.7512 1.26754 17.7512 1.4999C17.7512 1.73226 17.6589 1.9551 17.4946 2.1194L9.6196 9.9944C9.53832 10.0759 9.44176 10.1405 9.33546 10.1846C9.22915 10.2288 9.11519 10.2515 9.0001 10.2515C8.88501 10.2515 8.77104 10.2288 8.66474 10.1846C8.55844 10.1405 8.46188 10.0759 8.3806 9.9944L0.505599 2.1194C0.424114 2.03812 0.359464 1.94156 0.315352 1.83526C0.271241 1.72895 0.248535 1.61499 0.248535 1.4999C0.248535 1.38481 0.271241 1.27085 0.315352 1.16454C0.359464 1.05824 0.424114 0.96168 0.505599 0.880401Z"
                                fill="#141415"
                             />
                       </svg>
                                            </span>
                                        </Listbox.Button>
                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute pb-7 pt-2 px-2 z-10 mt-1 w-[412px]  bg-white border  text-base shadow-lg   focus:outline-none sm:text-sm">
                                                {data.map((person) => (
                                                    <Listbox.Option
                                                        key={person.id}
                                                        className={({ active }) =>
                                                            classNames(
                                                                active ? " rounded-md  " : "",
                                                                "relative cursor-default select-none "
                                                            )
                                                        }
                                                        value={person}
                                                    >
                                                        {({ selected, active }) => (
                                                            <>
                                                                <div className="flex items-center ml-5 cursor-pointer w-full">
                                                                    <div>
                                                                        <input type="checkbox" className="w-[20px] h-[20px]" checked={selected} onChange={() => setSelected(person)} />
                                                                    </div>
                                                                    <span
                                                                        className={classNames(
                                                                            selected ? "font-[400]" : "font-normal",
                                                                            " block truncate text-[16px] px-5 py-2 text-left"
                                                                        )}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                                <button className="text-[#09A122] border-2 font-[500] border-[#09A122] rounded-md w-[87px] py-[8px]" onClick={toggleDropdown}>Done</button>
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceType;
