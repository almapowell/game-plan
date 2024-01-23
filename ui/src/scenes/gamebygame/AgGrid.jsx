import React from "react";

const GroupedHeaderTable = () => {
	return (
	  // Grouped
    // <Table>
    //   <TableHead>
    //     <TableRow>
    //       <TableCell colSpan={2}>Group 1</TableCell>
    //       <TableCell colSpan={2}>Group 2</TableCell>
    //     </TableRow>
    //     <TableRow>
    //       {headers.map((header, index) => {
    //         console.log(header);
    //         return <TableCell key={index}>{formatHeader(header)}</TableCell>;
    //       })}
    //     </TableRow>
    //   </TableHead>
    //   <TableBody>
    //     <TableRow>
    //       {opponents.map((opponent, index) => {
    //         headers.map((header, index) => {
    //           console.count(opponent[header]);
    //           return (
    //             <TableCell key={index} align="center">
    //               {opponent[header]}
    //             </TableCell>
    //           );
    //         });
    //       })}
    //     </TableRow>
    //     {/* Add more rows as needed */}
    //   </TableBody>
    // </Table>
  );
};

//  <TableContainer component={Paper}>
//    <Table>
//      <TableBody>
//        {headers.map(
//          (header) =>
//            header !== "id" && (
//              <TableRow key={header}>
//                <TableCell
//                  style={{
//                    cursor: "pointer",
//                    //   minWidth: 200,
//                    fontSize: "13px",
//                    fontWeight: "700",
//                  }}
//                  component="th"
//                  scope="row"
//                >
//                  {formatHeader(header)}
//                </TableCell>
//                {opponents.map((opponent, index) => (
//                  <TableCell key={index} align="center">
//                    {header === "logo" ? (
//                      <img
//                        src={opponent[header]}
//                        alt="logo"
//                        width="50px"
//                        height="50px"
//                      />
//                    ) : (
//                      opponent[header]
//                    )}
//                  </TableCell>
//                ))}
//              </TableRow>
//            )
//        )}
//      </TableBody>
//    </Table>
//  </TableContainer>;

export default GroupedHeaderTable;
