import React from "react";
import {
    LeftColumn,
    RightColumn,
    Split,
    Container
} from "./List_view.styled"


const List = () =>{
    return (
        <Container>
            <LeftColumn>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 1 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 2 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 3 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 4 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 5 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 6 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 7 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 8 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 9 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 10 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 11 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 12 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 13 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 14 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Collector 15 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 1 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 2 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 3 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 4 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 5 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 6 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 7 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 8 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 9 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 10 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 11 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 12 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 13 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 14 </div>
                <div style={{ margin: 20, backgroundColor: "lightgreen", padding: 10, borderRadius: 10 }}> Janitor 15 </div>
            </LeftColumn>
            <Split> <div> </div>
            </Split>
            <RightColumn>
                <div style={{ margin: 20, backgroundColor: "lightblue", padding: 10, borderRadius: 10}}> 
                    <div style={{ margin: 10 }}> Name : </div>
                    <div style={{ margin: 10 }}> Employee ID : </div>
                    <div style={{ margin: 10 }}> Task ID : </div>
                    <div style={{ margin: 10 }}> Role : </div>
                    <div style={{ margin: 10 }}> MCP ID : </div>
                    <div style={{ margin: 10 }}> Vehicle ID : </div>
                    <div style={{ margin: 10 }}> Start date : </div>
                    <div style={{ margin: 10 }}> Shift : </div>
                    <div style={{ margin: 10 }}> Status : </div>
                </div>
            </RightColumn>
        </Container>

    );
};
export default List;

