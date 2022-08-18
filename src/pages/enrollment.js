import * as React from "react"
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material"
import { tableCellClasses } from "@mui/material/TableCell"
import { styled } from "@mui/material/styles"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#909497",
        color: theme.palette.common.white,
        fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}))

export const Head = () => < Seo title = "ผลการลงทะเบียน" / >
    const EnrollmentsPage = () => {
        const data = useStaticQuery(graphql `
    query {
      directus {
        Member {
          id, StudentID, Name, class
        }
        Class {
          id, subjectID, Subject, Date, Time , member
        }
    }
  `)

        return ( <
            Layout >
            <
            Seo title = "Member" / >
            <
            div className = "container  my-5" >
            <
            div className = "container" >
            <
            h1 align = "center" > ผลการลงทะเบียนเรียนของนั กศึกษาทั้ งหมด < /h1> <
            div className = "table" >
            <
            TableContainer componebt = { Paper } >
            <
            Table sx = {
                { minWidth: 700 } }
            aria - label = "customized table" >
            <
            TableHead >
            <
            TableRow >
            <
            StyledTableCell align = "center" > ชื่ อ < /StyledTableCell> <
            StyledTableCell align = "center" >
            รหั สนั กศึกษา <
            /StyledTableCell> <
            StyledTableCell align = "center" > วิชา < /StyledTableCell> <
            StyledTableCell align = "center" > วั น < /StyledTableCell> <
            StyledTableCell align = "center" > ชื่ อวิชา < /StyledTableCell> <
            StyledTableCell align = "center" > รหั สวิชา < /StyledTableCell> <
            StyledTableCell align = "center" > เวลา < /StyledTableCell> <
            /TableRow> <
            /TableHead>

            <
            TableBody > {
                data.directus.Enrollment.map(enrollment => ( <
                    StyledTableRow key = { enrollment.id } >
                    <
                    StyledTableCell align = "center" > { " " } { enrollment.member_id.Name } { " " } <
                    /StyledTableCell> <
                    StyledTableCell align = "center" > { " " } { enrollment.member_id.StudentID } { " " } <
                    /StyledTableCell> <
                    StyledTableCell align = "center" > { " " } { enrollment.member_id.Class } { " " } <
                    /StyledTableCell> <
                    StyledTableCell align = "center" > { " " } { enrollment.Class_id.Date } { " " } <
                    /StyledTableCell> <
                    StyledTableCell align = "center" > { " " } { enrollment.Class_id.subject } { " " } <
                    /StyledTableCell> <
                    StyledTableCell align = "center" > { " " } { enrollment.Class_id.subjectID } { " " } <
                    /StyledTableCell> <
                    StyledTableCell align = "center" > { " " } { enrollment.Class_id.Time } { " " } <
                    /StyledTableCell> <
                    /StyledTableRow>
                ))
            } <
            /TableBody> <
            /Table> <
            /TableContainer> <
            /div> <
            /div> <
            Link to = "/" > หน้ าแรก < /Link> <
            /div> <
            /Layout>
        )
    }

export default EnrollmentsPage