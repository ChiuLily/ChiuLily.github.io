<?php
session_start();
if($_GET['show_desktop_mode'] == 'true') {
    $_SESSION['desktopmode'] = 'true';
}
?>
    <?php
if($_SESSION['desktopmode'] == 'true') {
    /* DESKTOP MODE */
    ?>
        <meta name="viewport" content="width=1024">
        <?php
} else {
    // DEFAULT
    ?>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <?php
}
?>
