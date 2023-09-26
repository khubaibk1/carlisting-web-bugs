import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const data = [
    {
        id: 1,
        name: "Best Match",
    },
    {
        id: 2,
        name: "Price: (low to high)",
    },
    {
        id: 3,
        name: "Price: (high to low)",
    },
    {
        id: 4,
        name: "Nearest Location",
    },
    {
        id: 5,
        name: "Mileage: (lowest first)",
    },
    {
        id: 6,
        name: "Age: (new to old)",
    },
    {
        id: 7,
        name: "Age: (old to new)",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const SortMob = () => {
    const [selected, setSelected] = useState(data[0]);
    return (
        <div>
            <div className="flex flex-col text-center justify-center items-center">
                <div className="flex items-center justify-center gap-6 md:gap-8 ">
                    <div className="flex items-center gap-3 ">
                        <Listbox value={selected} onChange={setSelected} >
                            {({ open }) => (
                                <>

                                    <div className="relative ">
                                        <Listbox.Button >
                                            <div className='flex flex-col justify-start gap-2 ' >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                                                    <path d="M13 5H1M9 9H1M5 13H1M17 1H1M18 5V15M18 15L21 12M18 15L15 12" stroke="#141415" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p className='text-[12px] font-[500]'>
                                                    Sort

                                                </p>
                                            </div>
                                        </Listbox.Button>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >

                                            <Listbox.Options className="absolute py-2 px-2 z-10 mt-1 w-[280px]  bg-white border rounded-[20px] text-base shadow-lg   focus:outline-none sm:text-sm">
                                                <p className="text-left text-[20px] font-[600] p-4 border-b">Sort by</p>

                                                {data.map((person) => (
                                                    <Listbox.Option
                                                        key={person.id}
                                                        className={({ active }) =>
                                                            classNames(
                                                                active
                                                                    ? " rounded-md  "
                                                                    : "",
                                                                "relative cursor-default select-none "
                                                            )
                                                        }
                                                        value={person}
                                                    >

                                                        {({ selected, active }) => (
                                                            <>

                                                                <div className="flex items-center justify-between cursor-pointer border-b w-full">
                                                                    <span
                                                                        className={classNames(
                                                                            selected
                                                                                ? "font-[400]"
                                                                                : "font-normal",
                                                                            " block truncate text-[16px] px-5 py-4"
                                                                        )}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                    <div>
                                                                        <input type="radio" className="w-[20px] h-[20px] mr-5" />
                                                                    </div>

                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
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

export default SortMob;
