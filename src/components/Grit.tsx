import React, {useState} from 'react';
import _ from 'lodash';
import './Grit.module.css';
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@mui/material';

const Grit: React.FC = () => {
    const[chose, setChose] = useState(parseInt(0));
    const[modal, setModal] = useState(true);

    const handleClickClose = () => {setModal(true)};
    const reset =(s)=> {setChose(0)};

    return (
    <>
        <h3>「やり抜く力」をはかるグリット·スケール</h3>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>"No."</TableCell>
                <TableCell align="right">"項目"</TableCell>
                <TableCell align="right">"完全に当てはまらない"</TableCell>
                <TableCell align="right">"あまり当てはまらない"</TableCell>
                <TableCell align="right">"中立"</TableCell>
                <TableCell align="right">"いくらか当てはまる"</TableCell>
                <TableCell align="right">"かなり当てはまる"</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{}}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
            <p>当てはまる箇所の数字にマルをつけていき、合計して10で割った数値があなたのグリット·スコアとなる</p>
                <button type="button" className="btn btn-outline-secondary btn-lg" onClick={total} >　確　　定　</button>
                <button type="button" className="btn btn-outline-warning" onClick={reset} >リセット</button>
            <h2>あたたのグリット・スコアは、{chose/10}点です！！</h2>
    </>
    )
}
export default Grit;