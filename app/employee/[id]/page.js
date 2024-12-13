export default function SingleEmployee({params}) {
    const {id,name,email,mobile,status,department,designation,}=params;
    console.log(name)
  return (
    <div>
        The isd is {id};
        </div>
  )
}
