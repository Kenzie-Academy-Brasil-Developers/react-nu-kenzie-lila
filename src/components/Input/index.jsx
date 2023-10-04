export const Input = (Label, placeholder, type, id, typeNumber, setValue) => {
    return 
        <div>
            <label htmlFor={id}>{Label}</label>
            <input 
                name={id} 
                id={id} 
                type={type} 
                placeholder={placeholder} 
                typeNumber={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div> 
   
};

