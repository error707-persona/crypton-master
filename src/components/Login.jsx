import React from 'react'
import {Grid, TextField, Button, InputAdornment} from "@material-ui/core"
import {AccountCircle, LockRounded} from "@material-ui/icons"
const Login = () => {
    return (
        <div>
            <Grid container style={{minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img src="https://images.wsj.net/im-16358?width=1280&size=1" style={{width:'100%', height: '100%', objectFit:'cover'}} alt="crypt"/>
                </Grid>
                <div/>
                <Grid container item xs={12} sm={6} alignItems='center' direction='column' justify="space-between" style={{padding: 10}}>
                    <div/>
                    <div style={{display: "flex", flexDirection:"column", maxWidth:400, minWidth:300}}>
                        <Grid container justify="center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Cryptocurrency_Logo.svg" style={{width:"50px", height:"50px"}}></img>
                        </Grid>
                        <TextField name="username" label="Username" margin="normal" InputProps={{startAdornment: <InputAdornment position="start"><AccountCircle></AccountCircle></InputAdornment>}}/>
                        <TextField name="password" type="password" label="Password" margin="normal" InputProps={{startAdornment: <InputAdornment position="start"><LockRounded></LockRounded></InputAdornment>}}/>
                        <div style={{height:20}}/>
                        <Button color="primary" variant="contained">
                            Log in
                        </Button>
                        
                        <div style={{height:20}}/>
                            
                            <Button>Interested in joining?</Button>
                        
                    </div>
                    <div>
                        <Grid container justify="center">
                            <Grid item>
                            <Button color="primary">Go to community page</Button>
                            </Grid>
                            <Grid item>
                            <Button>Forgot Password?</Button>
                            </Grid>
                        </Grid>
                    </div>
                    <div/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
