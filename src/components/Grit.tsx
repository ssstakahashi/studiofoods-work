import React, { useState } from "react";
import './Grit.module.css';
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button, Grid } from '@mui/material';
import {titles} from './Text';

const initialState: number[] = [0,0,0,0,0,0,0,0,0,0]

const Grit: React.FC = () => {
    const answer  = initialState;
    const [ total,setTotal ] = useState<number>(0);
    const [ modal, setModal ] = useState<boolean>(true);
    const handleChange = (e:any) => {
        let num:number = Number(e.target.name);
        let val:number = Number(e.target.value); 
        if (num > 4 ) {
            val = val + ( 3 - val ) * 2; 
        }
        answer.splice( num, 1, val);
        submitOK()
    };
    const submitOK = () => {
        let sub = modal
        if ( answer.every( x => x > 0 ) ) {
            sub = false
        } 
        setModal(sub)
    }

    const handleSubmit = () => {
        let totalNum:number = answer.reduce(
            ( previousValue:number, currentValue:number ):number => previousValue + currentValue,0 )
        totalNum = (Math.round(totalNum/10*10) ) / 10
        setTotal(totalNum)
    }


    return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
            <h3>「やり抜く力」をはかるグリット·スケール</h3>
            <p>当てはまる項目にチェックした数値があなたのグリット·スコアとなります</p>
        </Grid>
        <Grid item>
            <Table sx={{ maxWidth: "95%" }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">No.</TableCell>
                        <TableCell align="center"  size="small">項目</TableCell>
                        <TableCell align="center">完全に<br />当てはまらない</TableCell>
                        <TableCell align="center">あまり<br />当てはまらない</TableCell>
                        <TableCell align="center">中立</TableCell>
                        <TableCell align="center">いくらか<br />当てはまる</TableCell>
                        <TableCell align="center">かなり<br />当てはまる</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {titles.map((row,index) => (
                    <TableRow key={row.num}>
                        <TableCell component="th" scope="row"  size="small" align="center">
                            {row.num}
                        </TableCell>
                        <TableCell size="small" align="left">
                            {row.word}
                        </TableCell>
                        <TableCell align="center">
                            <input type="radio" value={1} name={`${index}`} onChange={(e)=>handleChange(e)} />
                        </TableCell>
                        
                        <TableCell align="center">
                            <input type="radio" value={2} name={`${index}`} onChange={(e)=>handleChange(e)}/>
                        </TableCell>
                        <TableCell align="center">
                            <input type="radio" value={3} name={`${index}`} onChange={(e)=>handleChange(e)}/>
                        </TableCell>
                        <TableCell align="center">
                            <input type="radio" value={4} name={`${index}`} onChange={(e)=>handleChange(e)}/>
                        </TableCell>
                        <TableCell align="center">
                            <input type="radio" value={5} name={`${index}`} onChange={(e)=>handleChange(e)}/>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Grid>
        <Grid item>
            <Grid container direction="row" spacing={6}>
                <Grid item>
                    <Button variant="contained" onClick={handleSubmit} disabled={modal} size="large">
                        　確　　　定　  
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" size="large">リセット</Button>
                </Grid>
                <Grid item></Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                    <h2>あたたのグリット・スコアは、{total}点です！！</h2>
                </Grid>
            </Grid>

        </Grid>
    </Grid>
    )
}
export default Grit;