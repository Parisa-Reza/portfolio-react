export function ShowProjectBtn({showProjectAction}){
    return(
        <div>
            <button className="bg-[rgb(10,228,217)] font-medium px-2 py-2"
            onClick={showProjectAction}>
                Show All Projects
            </button>
        </div>
    )
}

