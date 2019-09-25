//交换函数
Array.prototype.swap = function (i, j) {
	var temp = this[i];
	this[i] = this[j];
	this[j] = temp;
}
//休眠
function sleep(n) {
	var start = new Date().getTime(); //定义起始时间的毫秒数
	while (true) {
		var time = new Date().getTime(); //每次执行循环取得一次当前时间的毫秒数
		if (time - start > n) { //如果当前时间的毫秒数减去起始时间的毫秒数大于给定的毫秒数，即结束循环
			break;
		}
	}
}
//冒泡
function maopao(arr) {

	var data = [];
	for (var i = arr.length - 1; i > 0; --i) {
		for (var j = 0; j < i; ++j) {

			if (arr[j] > arr[j + 1])
				arr.swap(j, j + 1);
		}
		let temp = arr.concat();
		data.push(temp);
	}
	return data;

}
//选择排序
function selectionSort(arr) {

	let data = [];
	for (var i = 0; i < arr.length; ++i) {
		var index = i;
		for (var j = i + 1; j < arr.length; ++j) {
			if (arr[j] < arr[index])
				index = j;
		}
		arr.swap(i, index);
		let temp = arr.concat();
		data.push(temp);
	}
	return data;
}



//插入排序
function insertionSort(arr) {
	for (var i = 1; i < arr.length; ++i) {
		var j = i,
			value = arr[i];
		while (j > 0 && arr[j - 1] > value) {
			arr[j] = arr[j - 1];
			--j;
		}
		arr[j] = value;
		let temp = arr.concat();
		data.push(temp);
	}
	return data;

}
//希尔排序
function shellSort(arr) {
	for (var step = arr.length >> 1; step > 0; step >>= 1) {
		//alert(step >>= 1);
		for (var i = 0; i < step; ++i) {
			for (var j = i + step; j < arr.length; j += step) {
				var k = j,
					value = arr[j];
				while (k >= step && arr[k - step] > value) {
					arr[k] = arr[k - step];
					k -= step;
				}
				arr[k] = value;
			}
			let temp = arr.concat();
			data.push(temp);
		}
	}
	return data;
}


function quickSort(num, from, to, data) {
	var from = from != undefined ? from : 0; //开始位置
	var to = to != undefined ? to : num.length - 1; //结束位置
	var i = from;
	var j = to;
	var key = num[from]; //基准值
	//var temp; // 临时变量，用于数字交换
	if (i >= j) {
		return num; //递归出口
	}
	while (i < j) { // 外层循环，当i=j时，循环结束，完成一轮的数字交换
		//j的目标是寻找比基准值小的值，
		//故当num[j]的值大于基准值时，需要往左移动，即j--，
		////直到找到小于基准值的情况下退出循环，并记录下此时的j值。
		while (i < j && num[j] > key) {
			j--;
		}
		//i的目标是寻找比基准值大的值，
		//故当num[j]的值小于基准值时，需要往右移动，即i++，
		//直到找到大于基准值的情况下退出循环，并记录下此时的i值。
		while (i < j && num[i] <= key) {
			i++;
		}
		//将i与j的值交换
		if (i < j) {
			num.swap(i, j);
			// temp = num[i];
			// num[i] = num[j];
			// num[j] = temp;
			let temp = num.concat();
			data.push(temp);
		}
	}
	//最后将i与基准值交换，完成第一轮的数字查找
	num[from] = num[i];
	num[i] = key;
	let t = num.concat();
	data.push(t);
	//使用递归算法，对数组下标从from~i-1的部分，
	//即小于基准值的左边部分进行排序。
	quickSort(num, from, i - 1,data);
	//使用递归算法，对数组下标从i+1~to的部分，
	//即小于基准值的右边部分进行排序。
	return quickSort(num, i + 1, to,data);

}



//堆栈快速排序
Array.prototype.stackQuickSort = function () {
	var stack = [0, this.length - 1];
	while (stack.length > 0) {
		var e = stack.pop(),
			s = stack.pop();
		if (s >= e)
			continue;
		this.swap((s + e) >> 1, e);
		var index = s - 1;
		for (var i = s; i <= e; ++i) {
			if (this[i] <= this[e])
				this.swap(i, ++index);
		}
		stack.push(s, index - 1, index + 1, e);
	}
}
//归并排序
Array.prototype.mergeSort = function (s, e, b) {
	if (s == null)
		s = 0;
	if (e == null)
		e = this.length - 1;
	if (b == null)
		b = new Array(this.length);
	if (s >= e)
		return;
	var m = (s + e) >> 1;
	this.mergeSort(s, m, b);
	this.mergeSort(m + 1, e, b);
	for (var i = s, j = s, k = m + 1; i <= e; ++i)
		b[i] = this[(k > e || j <= m && this[j] < this[k]) ? j++ : k++];
	for (var i = s; i <= e; ++i)
		this[i] = b[i];
}
//堆排序
Array.prototype.heapSort = function () {
	for (var i = 1; i < this.length; ++i) {
		for (var j = i, k = (j - 1) >> 1; k >= 0; j = k, k = (k - 1) >> 1) {
			if (this[k] >= this[j])
				break;
			this.swap(j, k);
		}
	}
	for (var i = this.length - 1; i > 0; --i) {
		this.swap(0, i);
		for (var j = 0, k = (j + 1) << 1; k <= i; j = k, k = (k + 1) << 1) {
			if (k == i || this[k] < this[k - 1])
				--k;
			if (this[k] <= this[j])
				break;
			this.swap(j, k);
		}
	}
}