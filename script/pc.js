// box:

            const icons = document.querySelectorAll('#programBar > div');

            function resetAll() {
                icons.forEach(el => {
                    el.style.backgroundColor = '';
                    const box = el.querySelector('.box');
                    if (box) {
                        box.classList.remove('show');
                    }

                });
            }

            icons.forEach(icon => {
                icon.addEventListener('click', function (e) {
                    e.stopPropagation();

                    resetAll();

                    const box = icon.querySelector('.box');
                    if (box) {
                        box.classList.add('show');
                    }
                    icon.style.backgroundColor = 'rgb(179, 189, 189)';
                });
            });

            document.body.addEventListener('click', function () {
                resetAll();
            });

            // felesh:

            const arrows = document.querySelectorAll('#sideIconBar > .felesh')[0];
            const holder = document.querySelectorAll('#sideIconBar > .felesh > .holder')[0];
            var t = 0

            
            arrows.onclick = function (e) {
                e.stopPropagation();
                if (t == 0) {
                        this.style.backgroundImage = "url('images/arrow1.png')";
                        this.style.backgroundSize = "90%";
                        holder.style.display = 'block';
                        t = 1;
                    } else if (t == 1) {
                    this.style.backgroundImage = "url('images/arrow.png')";
                    this.style.backgroundSize = "90%";
                    holder.style.display = 'none';
                    t = 0;
                }
                
            };

            holder.addEventListener('click', function (e) {
                e.stopPropagation();
            });

            holder.onclick = function () {
                resetWindows();
                resetRightClick();
                resetBoxPc();
            }
           
            function resetFelesh() {
                    arrows.style.backgroundImage = "url('images/arrow.png')";
                    arrows.style.backgroundSize = "90%";
                    holder.style.display = 'none';
                    t = 0;
            }
            
            document.body.addEventListener('click', function () {
                resetFelesh();
            });


            // right-click:

            const right = document.getElementById('right');

            document.addEventListener('contextmenu', function(e) {
                e.preventDefault();

                right.style.top = e.clientY + 'px';
                right.style.left = e.clientX + 'px';
                right.style.display = 'block';
            });

            function resetRightClick() {
                right.style.display = 'none';
            }

            document.addEventListener('click', function() {
                resetRightClick();
            });



            //-------------------------------------------------------------------------
            //this-pc:

            // felesh-pc:

            const device = document.querySelectorAll('#desktop > #programBar > #myCoumputer > .pc > .holder > .bar5 > .device')[0];
            const driver = document.querySelectorAll('#desktop > #programBar > #myCoumputer > .pc > .holder > .bar5 > .holder')[0];
            var t3 = 0
            
            device.onclick = function (e) {
                if (t3 == 0) {
                        this.style.backgroundImage = "url(images/arrow1.png)";
                        this.style.backgroundSize = "3%";
                        driver.classList.add('sel3');
                        t3 = 1;
                    } else if (t3 == 1) {
                        this.style.backgroundImage = "url(images/arrow2.png)";
                        this.style.backgroundSize = "3%";
                        driver.classList.remove('sel3');
                        t3 = 0;
                }
            };

            // box-pc:

            const p = document.querySelectorAll('#screen > #desktop > #programBar > #myCoumputer > .pc')[0];
            const c = document.querySelectorAll('#screen > #desktop > #programBar > #myCoumputer > .pc > .holder > .bar5 > .holder > .c')[0];
            const d = document.querySelectorAll('#screen > #desktop > #programBar > #myCoumputer > .pc > .holder > .bar5 > .holder > .d')[0];
            const box1 = document.querySelectorAll('#screen > #desktop > #programBar > #myCoumputer > .pc > .holder > .bar5 > .holder > .c > .box')[0];
            const box2 = document.querySelectorAll('#screen > #desktop > #programBar > #myCoumputer > .pc > .holder > .bar5 > .holder > .d > .box')[0];
            c.onclick = function (e) {
                c.classList.add('sel');
            };

            d.onclick = function (e) {
                d.classList.add('sel');
            };

            function resetBoxPc() {
                c.classList.remove('sel');
                d.classList.remove('sel');
            }

            p.onclick = function (e) {
                const target = e.target;

                if (target == c || target == d) {
                    return;
                }

                resetFelesh();
                resetRightClick();
                resetWindows();
                resetBoxPc();
                resetBoxrec();
            }

            document.body.addEventListener('click', function () {
                resetBoxPc();
            });


            // pc-doublClick:

            const pc = document.querySelectorAll('#screen > #desktop > #programBar > #myCoumputer')[0];
            const p1 = document.querySelectorAll('#screen > #desktop > #programBar > #myCoumputer > .pc')[0];
            const f = document.querySelectorAll('#screen > #taskbar > #iconBar > .folder')[0];

            pc.ondblclick = function double() {
                p1.classList.add('sel2');
                f.classList.add('sel1');
            };

            // mini:

            const mini = document.querySelectorAll('#screen > #desktop > #programBar > #myCoumputer > .pc > .bar1 > .minimize')[0];

            mini.onclick = function min() {
                p1.classList.remove('sel2');
                f.classList.add('sel1');
                driver.classList.remove('sel3');
            }

            // size:

            const size = document.querySelectorAll('#screen > #desktop > #programBar > #myCoumputer > .pc > .bar1 > .small')[0];

            let siz = 0;
            size.onclick = function si() {
                if (siz == 0) {
                    p1.style.height = "510px";
                    p1.style.width = "1000px";
                    siz = 1;
                }else if (siz == 1) {
                    p1.style.height = "500px";
                    p1.style.width = "900px";
                    siz = 0;
                }
            }

            // close:

            const cl = document.querySelectorAll('#screen > #desktop > #programBar > #myCoumputer > .pc > .bar1 > .close')[0];

            cl.onclick = function clo() {
                p1.style.top = "-100px";
                p1.style.left= "250px";
                p1.style.height = "500px";
                p1.style.width = "900px";
                p1.classList.remove('sel2');
                f.classList.remove('sel1');
                driver.classList.remove('sel3');
            }


            //-------------------------------------------------------------------------
            //recycle:

            // felesh-pc:

            const device1 = document.querySelectorAll('#desktop > #programBar > #RecycleBin > .rec > .holder > .bar5 > .device')[0];
            const driver1 = document.querySelectorAll('#desktop > #programBar > #RecycleBin > .rec > .holder > .bar5 > .holder')[0];
            var t4 = 0
            
            device.onclick = function (e) {
                if (t4 == 0) {
                        this.style.backgroundImage = "url(images/arrow1.png)";
                        this.style.backgroundSize = "3%";
                        driver.classList.add('sel3');
                        t4 = 1;
                    } else if (t4 == 1) {
                        this.style.backgroundImage = "url(images/arrow2.png)";
                        this.style.backgroundSize = "3%";
                        driver.classList.remove('sel3');
                        t4 = 0;
                }
            };

            // box-rec:

            const p2 = document.querySelectorAll('#screen > #desktop > #programBar > #RecycleBin > .rec')[0];
            const c1 = document.querySelectorAll('#screen > #desktop > #programBar > #RecycleBin > .rec > .holder > .bar5 > .holder > .c')[0];
            const d1 = document.querySelectorAll('#screen > #desktop > #programBar > #RecycleBin > .rec > .holder > .bar5 > .holder > .d')[0];
            const box3 = document.querySelectorAll('#screen > #desktop > #programBar > #RecycleBin > .rec > .holder > .bar5 > .holder > .c > .box')[0];
            const box4 = document.querySelectorAll('#screen > #desktop > #programBar > #RecycleBin > .rec > .holder > .bar5 > .holder > .d > .box')[0];
            c1.onclick = function (e) {
                c1.classList.add('sel');
            };

            d1.onclick = function (e) {
                d1.classList.add('sel');
            };

            function resetBoxrec() {
                c1.classList.remove('sel');
                d1.classList.remove('sel');
            }

            p2.onclick = function (e) {
                const target = e.target;

                if (target == c1 || target == d1) {
                    return;
                }

                resetFelesh();
                resetRightClick();
                resetWindows();
                resetBoxPc();
            }

            document.body.addEventListener('click', function () {
                resetBoxPc();
            });

            // pc-doublClick:

            const pc1 = document.querySelectorAll('#screen > #desktop > #programBar > #RecycleBin')[0];
            const p3 = document.querySelectorAll('#screen > #desktop > #programBar > #RecycleBin > .rec')[0];
            const f1 = document.querySelectorAll('#screen > #taskbar > #iconBar > .rec')[0];

            pc1.ondblclick = function double() {
                p3.classList.add('sel2');
                f1.classList.add('sel2');
            };

            // minimize:

            // mini

            const mini1 = document.querySelectorAll('#screen > #desktop > #programBar > #RecycleBin > .rec > .bar1 > .minimize')[0];

            mini1.onclick = function min() {
                p3.classList.remove('sel2');
                f1.classList.add('sel2');
                driver1.classList.remove('sel3');
            }

            // size:

            const size1 = document.querySelectorAll('#screen > #desktop > #programBar > #RecycleBin > .rec > .bar1 > .small')[0];

            let siz1 = 0;
            size1.onclick = function si() {
                if (siz1 == 0) {
                    p3.style.height = "510px";
                    p3.style.width = "1000px";
                    siz1 = 1;
                }else if (siz1 == 1) {
                    p3.style.height = "500px";
                    p3.style.width = "900px";
                    siz1 = 0;
                }
            }

            // close:

            const cl1 = document.querySelectorAll('#screen > #desktop > #programBar > #RecycleBin > .rec > .bar1 > .close')[0];

            cl1.onclick = function min() {
                p3.style.top = "-220px";
                p3.style.left= "250px";
                p3.classList.remove('sel2');
                f1.classList.remove('sel2');
                driver1.classList.remove('sel3');
            }

            //-------------------------------------------------------------------------
            // telegram:

            // profile:

            const prof = document.querySelectorAll('#screen > #desktop > #programBar > #telegram > .tel > .bar2 > .menu')[0];
            const menu1 = document.querySelectorAll('#screen > #desktop > #programBar > #telegram > .tel > .bar2 > .menu > .holder')[0];
            
            prof.onclick = function () {
                menu1.classList.add('sell');
            }

            // tel-doublClick:

            const pc2 = document.querySelectorAll('#screen > #desktop > #programBar > #telegram')[0];
            const p4 = document.querySelectorAll('#screen > #desktop > #programBar > #telegram > .tel')[0];
            const t5 = document.querySelectorAll('#screen > #taskbar > #iconBar > .telegram')[0];

            pc2.ondblclick = function double() {
                p4.classList.add('sel4');
                t5.classList.add('sel4');
            };

            // t5.onclick = function () {
            //     if (p4.classList.contains('sel4')) {
            //         p4.classList.remove('sel4');
            //         menu1.classList.remove('sell');
            //     } else {
            //         p4.classList.add('sel4'); 
            //         t5.classList.add('sel4');
            //     }
            // }

            function resettel() {
                menu1.classList.remove('sell');
            }

            p4.addEventListener('click', function (e) {
            const target = e.target;

            if (target == prof || target == menu1) {
                return;
            }

            resetFelesh();
            resetRightClick();
            resetWindows();
            resetBoxPc();
            resetBoxrec();
            resettel();
            
            });

            // minimize:
            
            const mini2 = document.querySelectorAll('#screen > #desktop > #programBar > #telegram > .tel > .bar1 > .minimize')[0];

            mini2.onclick = function min() {
                p4.classList.remove('sel4');
                t5.classList.add('sel4');
                menu1.classList.remove('sell');
            }

            // size:

            const size2 = document.querySelectorAll('#screen > #desktop > #programBar > #telegram > .tel > .bar1 > .small')[0];

            let siz2 = 0;
            size2.onclick = function si() {
                if (siz2 == 0) {
                    p4.style.height = "510px";
                    p4.style.width = "1000px";
                    siz2 = 1;
                }else if (siz2 == 1) {
                    p4.style.height = "500px";
                    p4.style.width = "900px";
                    siz2 = 0;
                }
            }

            // close:

            const cl2 = document.querySelectorAll('#screen > #desktop > #programBar > #telegram > .tel > .bar1 > .close')[0];

            cl2.onclick = function min() {
                p4.style.top = "-340px";
                p4.style.left= "250px";
                p4.classList.remove('sel4');
                t5.classList.remove('sel4');
                menu1.classList.remove('sell');
            }

            // ttel:

            const ttel = document.querySelectorAll('#screen > #taskbar > #iconBar > .windows > .menu > .programs > .tel')[0];

            ttel.onclick = function (){
                p4.classList.add('sel4'); 
                t5.classList.add('sel4');
                resetWindows();
            }

            //-------------------------------------------------------------------------
            // power:

            const buttom = document.querySelectorAll('#iconBar > .windows > .menu > .power > .buttom')[0];
            const power = document.querySelectorAll('#iconBar > .windows > .menu > .power > .buttom > .holder')[0];
            var t2 = 0

            buttom.onclick = function (e) {
                e.stopPropagation();
                if (t2 == 0) {
                    power.style.display = 'block';
                    t2 = 1;
                } else if (t2 == 1) {
                    power.style.display = 'none';
                    t2 = 0;
                }
            };

            power.addEventListener('click', function (e) {
                    e.stopPropagation();
            });

            function resetPower() {
                    power.style.display = 'none';
                    t2 = 0;
                }

            document.body.addEventListener('click', function () {
                    resetPower();
            });


            const power1 = document.querySelectorAll('#screen > #taskbar > #iconBar > .windows > .menu > .power > .buttom > .holder > .shutDown')[0];
            const screen1 = document.querySelectorAll('#screen')[0];

            power1.onclick = function () {
                screen1.style.background = 'black';
                document.querySelector('#desktop').style.display = 'none';
                document.querySelector('#taskbar').style.display = 'none';
            }

            const restart = document.querySelectorAll('#screen > #taskbar > #iconBar > .windows > .menu > .power > .buttom > .holder > .restart')[0];

            restart.onclick = function (){
                screen1.style.background = 'black';
                dd.classList.remove('seld');

                ff.classList.remove('self');
            }

            //-------------------------------------------------------------------------
            // enter:

            const ff = document.querySelectorAll('#first')[0];
            const dd = document.querySelectorAll('#screen')[0];
            const input = document.querySelectorAll('#first > .enter > .pass > input')[0];
            const enter = document.querySelectorAll('#first > .enter > .enter')[0];
            const er = document.querySelectorAll('#first > .enter > .error')[0];

            enter.onclick = function () {
            const pass = input.value;

            if (pass === "ahmad") {
                er.classList.remove('sel');
                ff.classList.add('self');
                dd.classList.add('seld');
                input.value = ""; 
            } else {
                input.value = "";
                er.classList.add('sel');
            }
            };

            //-------------------------------------------------------------------------
            // menu:

            const windows = document.querySelectorAll('#iconBar > .windows')[0];
            const menu = document.querySelectorAll('#iconBar > .windows > .menu')[0];
            var t1 = 0

            windows.onclick = function (e) {
                e.stopPropagation();
                if (t1 == 0) {
                    menu.style.display = 'block';
                    t1 = 1;
                } else if (t1 == 1) {
                    menu.style.display = 'none';
                    t1 = 0;
                }
            };

            menu.addEventListener('click', function (e) {
                    e.stopPropagation();
                });

            menu.onclick = function () {
                resetFelesh();
                resetPower();
                resetRightClick();
                resetBoxPc();
            }

            function resetWindows() {
                    menu.style.display = 'none';
                    t1 = 0;
                }

            document.body.addEventListener('click', function () {
                    resetWindows();
                });

            //-------------------------------------------------------------------------
            // layer:

            const com = document.querySelectorAll('#screen > #desktop > #programBar > #myCoumputer > .icon')[0];
            const recy = document.querySelectorAll('#screen > #desktop > #programBar > #RecycleBin > .icon')[0];
            const tele = document.querySelectorAll('#screen > #desktop > #programBar > #telegram > .icon')[0];

            let topZ = 10;

            com.onclick = function () {
                topZ++;
                document.querySelector('#myCoumputer > .pc').style.zIndex = topZ;
            };

            f.onclick = function fol() {
                
                if (p1.classList.contains('sel2')) {
                    p1.classList.remove('sel2');
                    driver.classList.remove('sel3');
                } else {
                    p1.classList.add('sel2'); 
                    f.classList.add('sel1');
                }
                topZ++;
                document.querySelector('#RecycleBin > .rec').style.zIndex = topZ;
            }

            recy.onclick = function () {
                topZ++;
                document.querySelector('#RecycleBin > .rec').style.zIndex = topZ;
            };

            f1.onclick = function () {
                
                if (p3.classList.contains('sel2')) {
                    p3.classList.remove('sel2');
                    driver.classList.remove('sel3');
                } else {
                    p3.classList.add('sel2'); 
                    f1.classList.add('sel2');
                }
                topZ++;
                document.querySelector('#RecycleBin > .rec').style.zIndex = topZ;
            }

            tele.onclick = function () {
                topZ++;
                document.querySelector('#telegram > .tel').style.zIndex = topZ;
            };

            t5.onclick = function () {
                
                if (p4.classList.contains('sel4')) {
                    p4.classList.remove('sel4');
                    menu1.classList.remove('sell');
                } else {
                    p4.classList.add('sel4'); 
                    t5.classList.add('sel4');
                }
                topZ++;
                document.querySelector('#telegram > .tel').style.zIndex = topZ;
            }


            //-------------------------------------------------------------------------
            // drag:

            const draggableWindows = [
                document.querySelector('#myCoumputer > .pc'),
                document.querySelector('#RecycleBin > .rec'),
                document.querySelector('#telegram > .tel')
            ];

            draggableWindows.forEach(win => {
            const header = win.querySelector('.bar1:not(.minimize)');
            let isDragging = false, offsetX, offsetY;


            header.addEventListener('mousedown', e => {

                if (
                    e.target.classList.contains('minimize') ||
                    e.target.classList.contains('small') ||
                    e.target.classList.contains('close')
                ) {
                    return;
                }


                isDragging = true;
                offsetX = e.offsetX; // فاصله موس از گوشه پنجره
                offsetY = e.offsetY;
                topZ++;
                win.style.zIndex = topZ; // پنجره روی بقیه قرار بگیرد
            });

            document.addEventListener('mousemove', e => {
                if (!isDragging) return;
                const parentRect = win.parentElement.getBoundingClientRect();
                let newLeft = e.clientX  - offsetX;
                let newTop = e.clientY;

                if (win == draggableWindows[0]) {
                    newTop = e.clientY - 150;
                }
                else if (win == draggableWindows[1]) {
                    newTop = e.clientY - 270;
                }
                else if (win == draggableWindows[2]) {
                    newTop = e.clientY - 390;
                }

                win.style.left = newLeft + 'px';
                win.style.top = newTop + 'px';
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
            });
        });
