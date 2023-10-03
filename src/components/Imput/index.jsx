export const Input = (Label, placeholder, type, id, value, setValue) => {
    return 
        <div>
            <label htmlFor={id}>{Label}</label>
            <input 
                name={id} 
                id={id} 
                type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div> 
   
};

