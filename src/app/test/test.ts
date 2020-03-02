import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './test.html'
})

export class MyMiscComponent implements OnInit {
    ngOnInit() {
      const ints = [17, 20, 1,3,4,2,5, -5];
      this.closestToZero(ints);

      this.numberOfWeeks(2014, 'April', 'May', 'Wendsay');

      this.maxNumberOfWordsInSentence('We test coders here.  Give as a try? Got it! Got it.')

      // const minValue = this.minValueInBothArrays([1, 3, 2, 1], [4, 2, 5, 3, 2]);
      const minValue = this.minValueInBothArrays([4, 2, 5, 3, 2], [1, 3, 2, 1]);
    }

    closestToZero(myArr) {
        if (myArr === null) { return 0; }
        else if (myArr.length === 0) { return 0; }

        myArr.sort((prev, next) => {
          return prev > next ? 1
                  : prev < next ? -1
                  : 0
        })

        let index = 0
        let diff = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < myArr.length; i++) {
            const currAbs = Math.abs(myArr[i]);

            if (currAbs < diff) {
              index = i;
              diff = currAbs;
            } else if (currAbs === diff && myArr[i] > 0 && myArr[index] < 0) {
                index = myArr[i];
            }
        }

        return myArr[index];
    }

    numberOfWeeks(Y:number, A:string, B:string, W:string) {
      const fromMonth = this.getMonth(A);
      const toMonth = this.getMonth(B);

      const fromDate = new Date(Y, fromMonth, 1).getTime();
      const toDate = new Date(Y, toMonth, 1).getTime();

      return Math.round((toDate - fromDate)/1000/60/60/24/7);
    }

    maxNumberOfWordsInSentence(s) {
        let count = 0;
        const sentences = s.split(/[.?!]/g);

        for(let i = 0; i < sentences.length; i++) {
            if (sentences[i].trim().length !== 0) {
                 const words = sentences[i].trim().split(' ');

                 if (words.length > count) {
                    count = words.length;
                 }
            }
        }
    }

    // should return
    // min value that occurs in both arrays if such number is found
    // -1 if such number is not found
    minValueInBothArrays(A, B) {
        const N = A.length;
        const M = B.length;

        A.sort(this.cmp);
        B.sort(this.cmp);

        let i = 0;
        for(let k = 0; k < N; k++) {
            if (i < M - 1 && B[i] < A[k]) {
              i += i;
            }

            if (A[k] == B[i]) {
                return A[k];
            }
        }
        return -1;
    }

    getMonth(name) {
      if (name.toLowerCase() === 'january') { return 0}
      else if (name.toLowerCase() === 'february') { return 1 }
      else if (name.toLowerCase() === 'march') { return 2 }
      else if (name.toLowerCase() === 'april') { return 3 }
      else if (name.toLowerCase() === 'may') { return 4 }
      else if (name.toLowerCase() === 'june') { return 5 }
      else if (name.toLowerCase() === 'july') { return 6 }
      else if (name.toLowerCase() === 'august') { return 7 }
      else if (name.toLowerCase() === 'september') { return 8 }
      else if (name.toLowerCase() === 'october') { return 9 }
      else if (name.toLowerCase() === 'november') { return 10 }
      else if (name.toLowerCase() === 'december') { return 11 }
    }

    cmp(a, b) {
      return a - b;
    }
}
