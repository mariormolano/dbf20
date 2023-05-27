import {Box, Card, Typography, CardContent} from "@mui/material"

export const InfoUsuarios = (props) => {
    const {task, taskList} = props
    return (
      <Box
        component="span"
        sx={{
          minWidth: "275px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          mx: "2px",
          transform: "scale(0.8)",
          gap: "10px",
        }}
        key={task.id}
      >
        {taskList.map((task) => {
          return (
            <Card key={task.id} variant="outlined" sx={{ minWidth: "270px" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 24, fontWeight: "bold" }}
                  component="p"
                  color="text.secondary"
                  gutterBottom
                >
                  {task.nombre.toUpperCase()} {task.apellido.toUpperCase()}
                </Typography>
                <br />
                <Typography
                  sx={{ fontSize: 17 }}
                  component="p"
                  color="text.secondary"
                  gutterBottom
                >
                  {task.telefono}
                  <br />
                  {task.direccion}
                  <br />
                  {task.rangoedad}
                  <br />
                  {task.email}
                  <br />
                  {task.eps}
                  <br />
                  {task.documento}
                  <br />
                  {task.atyc}
                  <br />
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    );
}