import "./filter.css"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function setElement(event, type, setAttribute){
    var selected = event.currentTarget.id
    if (parseInt(selected)){
        selected = parseInt(selected)
    }
    if (event.currentTarget.checked){
        setAttribute(oldarray => [...oldarray, selected])
    }
    else{
        setAttribute(type.filter(e => e !== selected))
    }
}

function setAutocomplete(value, setSearchQuery){
    if (value){
        setSearchQuery(value.name)
    }
    else{
        setSearchQuery("")
    }
}

export default function Filter(props){
    return(
        <div className="filter-div">
            <div className="div-filter-type">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={props.products}
                getOptionLabel={option => option.name}
                sx={{ width: 400 }}
                onChange={(event, value) => {setAutocomplete(value, props.setSearchQuery)}}
                renderInput={(params) => 
                    <TextField
                        sx={{ input: { color: 'white', fontSize: 16 } ,
                            "& .MuiOutlinedInput-root": {
                                "& > fieldset": {
                                    border: "2px solid white"
                                }
                            },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                    borderColor: "orange"
                                }
                            },
                            "& .MuiOutlinedInput-root:hover": {
                                "& > fieldset": {
                                  borderColor: "orange"
                                }
                              }
                        }}
                        onKeyDown={e => {
                            if (e.code === 'Enter' && e.target.value) {
                            props.setSearchQuery(e.target.value)
                        }
                        }}
                        {...params} 
                        label="Rechercher"
                        InputLabelProps={{style: {color: "white", fontSize: 16}}}
                    />}
            />
            </div>
            <div className="div-filter-type">
                <p className="filter-text">Appareil</p>
                <div>
                    <input type="checkbox" id="phone" name="phone" onChange={(event) => setElement(event, props.type, props.setType)}/>
                    <label for="phone">Téléphone</label>
                </div>
                <div>
                    <input type="checkbox" id="computer" name="computer" onChange={(event) => setElement(event, props.type, props.setType)}/>
                    <label for="computer">Ordinateur</label>
                </div>
            </div>
            <div className="div-filter-type">
                <p className="filter-text">Capacité</p> 
                <div>
                    <input type="checkbox" id={64} name="64" onChange={(event) => setElement(event, props.capacity, props.setCapacity)}/>
                    <label for="64">64 GO</label>
                </div>
                <div>
                    <input type="checkbox" id={128} name="128" onChange={(event) => setElement(event, props.capacity, props.setCapacity)}/>
                    <label for="128">128 GO</label>
                </div>
            </div>
        </div>
    )
}