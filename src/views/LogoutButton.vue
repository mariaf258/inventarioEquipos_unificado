<script>

const toggleDropdown = () => {
    isDropdownVisible.value = !isDropdownVisible.value
}

const userIcon = document.getElementById('userIcon')
    const userDropdown = document.getElementById('userDropdown')

    userIcon?.addEventListener('click', () => {
        userDropdown?.classList.toggle('show')
    })
</script>

<template>
    <nav class="navbar bg-body-tertiary fixed-top">
            <img
                src="../../public/img/user.png"
                alt="user"
                @click="toggleDropdown"
                class="userIcon"
            />
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <ul v-show="isDropdownVisible" class="dropdown-menu">
                    <img
                    src="../../public/img/user-white.png"
                    alt="user"
                    @click="toggleDropdown"
                    class="userIcon-white"
                    />
                    <a class="dropdown-item" @click="logout">Cerrar Sesión</a>
                </ul>
                </ul>
            </div>
            </nav>
</template>