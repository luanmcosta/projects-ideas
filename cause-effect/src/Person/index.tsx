
export interface PersonProps{
    name: string,
    image: string,
    address: string
}

export function Person({name, image, address}: PersonProps){
    return (
        <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                    <p className="text-lg font-medium">
                        Some text
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        {name}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {address}
                    </div>
                    </figcaption>
                </div>
            </figure>
        </>
    )
}