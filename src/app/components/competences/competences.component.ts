import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const observerjs = new IntersectionObserver(function (entries) {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].intersectionRatio <= 0) continue;
        showbjs(entries[i].target);
      }
    }, {
      rootMargin: '-10% 0% -10% 0%'
    });
    const elementsjs = document.querySelectorAll('.skilbarempjs');
    for (let i = 0; i < elementsjs.length; i++) {
      observerjs.observe(elementsjs[i]);
    }

    function showbjs(e) {
      e.classList.add('skilbar-js');
      observerjs.unobserve(e);
    }

    const observerang = new IntersectionObserver(function (entries) {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].intersectionRatio <= 0) continue;
        showbang(entries[i].target);
      }
    }, {
      rootMargin: '-10% 0% -10% 0%'
    });
    const elementsang = document.querySelectorAll('.skilbarempang');
    for (let i = 0; i < elementsang.length; i++) {
      observerang.observe(elementsang[i]);
    }

    function showbang(e) {
      e.classList.add('skilbar-ang');
      observerang.unobserve(e);
    }

    const observerrct = new IntersectionObserver(function (entries) {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].intersectionRatio <= 0) continue;
        showbrct(entries[i].target);
      }
    }, {
      rootMargin: '-10% 0% -10% 0%'
    });
    const elementsrct = document.querySelectorAll('.skilbaremprct');
    for (let i = 0; i < elementsrct.length; i++) {
      observerrct.observe(elementsrct[i]);
    }

    function showbrct(e) {
      e.classList.add('skilbar-rct');
      observerrct.unobserve(e);
    }

    const observernode = new IntersectionObserver(function (entries) {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].intersectionRatio <= 0) continue;
        showbnode(entries[i].target);
      }
    }, {
      rootMargin: '-10% 0% -10% 0%'
    });
    const elementsnode = document.querySelectorAll('.skilbarempnode');
    for (let i = 0; i < elementsnode.length; i++) {
      observernode.observe(elementsnode[i]);
    }

    function showbnode(e) {
      e.classList.add('skilbar-node');
      observernode.unobserve(e);
    }

    const observerlangue = new IntersectionObserver(function (entries) {
      for (let i = 0; i < entries.length; i++) {
        if (entries[i].intersectionRatio <= 0) continue;
        showblangue(entries[i].target);
      }
    }, {
      rootMargin: '-10% 0% -30% 0%'
    });
    const elementslangue = document.querySelectorAll('.langue');
    for (let i = 0; i < elementslangue.length; i++) {
      observerlangue.observe(elementslangue[i]);
    }

    function showblangue(e) {
      document.getElementById("fr").classList.add("p77")
      document.getElementById("en").classList.add("p51")
      document.getElementById("jp").classList.add("p100")
      observerlangue.unobserve(e);
    }


  }


}
