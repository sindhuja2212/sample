export const ListComponent=(prop)=>{
    const {lists}=prop
    return(
      <ol>
        <>
        {
            lists.map((each,index)=>{
                return(
                    <li key={index}>{each}</li>
                )
            })
        }
        </>
      </ol>

    )
}



