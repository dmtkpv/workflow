(() => {

    const $sections = document.querySelectorAll('section');
    const $videos = document.querySelectorAll('video');
    const [$prev, $next] = document.querySelectorAll('.nav');

    let curr = 0;

    function toggle (index, active) {
        $sections[index].style.display = active ? 'block' : '';
        if (active) $videos[index].play();
        else {
            $videos[index].pause();
            $videos[index].currentTime = 0;
        }

    }

    function update () {
        const next = (+location.hash.substring(1) || 1) - 1;
        toggle(curr, false);
        toggle(next, true);


        curr = next;
        $prev.href = `#${curr === 0 ? $sections.length : curr}`
        $next.href = `#${next + 2 > $sections.length ? 1 : next + 2}`

    }

    addEventListener('hashchange', update);
    update()

})();