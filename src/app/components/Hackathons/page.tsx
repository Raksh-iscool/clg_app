import React from 'react';
import Nav from "../Navbar/page";
import Search from "../searchbar";
import Link from "next/link";
import Image from 'next/image';

function Page() {
    return (
        <div>
            <Nav />
            <div className="text-white text-center mt-20 w-auto flex justify-center">
                <Search />
            </div>
            <div className="h-screen"> {/* Removed overflow-y-auto */}
                <div className="flex flex-wrap justify-evenly pt-10">
                    <div className="m-2 bg-gray-800 rounded-lg shadow-md w-1/3 h-1/6">
                        <Image
                            src="/pitchathon.jpg"
                            alt="pitchathon"
                            width={700}
                            height={800}
                            className="rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">Hackathon 1</h2>
                            <p className="text-gray-300">Date: 1st October</p>
                            <p className="text-gray-300">Location: Online</p>
                            <Link href="https://vitchennaievents.com/conf1/"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 inline-block mr-3" >View
                            </Link>
                            <Link href="/" className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 inline-block" >Form Team
                            </Link>
                        </div>
                    </div>

                    <div className="m-2 bg-gray-800 rounded-lg shadow-md w-1/3 h-auto">
                        <Image
                            src="/pitchathon2.jpg"
                            alt="pitchathon"
                            width={700}
                            height={800}
                            className="rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">Hackathon 2</h2>
                            <p className="text-gray-300">Date: 7th October</p>
                            <p className="text-gray-300">Location: Online</p>
                            <Link href="https://www.vitchennaievents.com/conf1/index.php?eventid=2270"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 inline-block mr-3" >View
                            </Link>
                            <Link href="/" className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 inline-block" >Form Team
                            </Link>
                        </div>
                    </div>

                    <div className="m-2 bg-gray-800 rounded-lg shadow-md w-1/3 h-auto mb-4">
                        <Image
                            src="/pitchathon3.jpg"
                            alt="pitchathon"
                            width={700}
                            height={800}
                            className="rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">Hackathon 3</h2>
                            <p className="text-gray-300">Date: 14th October</p>
                            <p className="text-gray-300">Location: Online</p>
                            <Link href=""
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 inline-block mr-3" >View
                            </Link>
                            <Link href="/" className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 inline-block" >Form Team
                            </Link>
                        </div>
                    </div>
                    <div className="m-2 bg-gray-800 rounded-lg shadow-md w-1/3 h-auto">
                        <Image
                            src="/pitchathon4.jpg"
                            alt="pitchathon"
                            width={700}
                            height={800}
                            className="rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">Hackathon 4</h2>
                            <p className="text-gray-300">Date: 21st October</p>
                            <p className="text-gray-300">Location: Online</p>
                            <Link href="https://www.sih.gov.in/signin"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 inline-block mr-3" >View
                            </Link>
                            <Link href="/" className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 inline-block" >Form Team
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
