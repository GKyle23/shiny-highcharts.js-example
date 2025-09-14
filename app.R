# Minimal launcher to keep ui.R/server.R untouched
source("ui.R", local = TRUE)
source("server.R", local = TRUE)

shinyApp(ui = ui, server = server)
