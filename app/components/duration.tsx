
export default function Duration({duration}: {duration: string}) {
    return (
        <div className="flex w-fit p-2 border rounded-lg bg-purple-200">
            <svg className="w-4 mr-1" focusable="false" aria-hidden="true"
                 viewBox="0 0 24 24">
                <path
                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m3.3 14.71L11 12.41V7h2v4.59l3.71 3.71z"></path>
            </svg>
            <p className="text-xs">≃ {duration}</p>
        </div>

    )
}